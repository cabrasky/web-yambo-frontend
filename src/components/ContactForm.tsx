import React, { useState } from "react";
import { ContactMessage } from "../types/ContactMessage";
import contactService from "../services/ContactService";

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactMessage>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [inputErrors, setInputErrors] = useState<Record<string, string>>({}); // Estado para mensajes de error por campo

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setInputErrors((prev) => ({ ...prev, [name]: "" })); // Limpia el mensaje de error al editar
    };

    const validateInputs = (): boolean => {
        const errors: Record<string, string> = {};
        if (!formData.name.trim()) errors.name = "¡Oops! No olvides decirnos tu nombre. 🙃";
        if (!formData.email.trim()) {
            errors.email = "Por favor, dinos cómo podemos escribirte. 📩";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Hmm... ¿estás seguro de que ese es un correo válido? 🤔";
        }
        if (!formData.subject.trim()) errors.subject = "Un asunto ayudaría a organizarnos mejor. 📋";
        if (!formData.message.trim()) errors.message = "¡Cuéntanos algo! No dejes este espacio vacío. 😊";

        setInputErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateInputs()) return;

        setIsLoading(true);
        setIsError(false);
        try {
            await contactService.sendMessage(formData);
            setResponseMessage("¡Tu mensaje ha volado hasta nosotros! 🕊️✨");
        } catch (error) {
            setIsError(true);
            setResponseMessage("Ups, algo salió mal. ¿Podrías intentarlo de nuevo? 🙏");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h5 className="text-center mb-4">¿Tienes algo que decirnos? ¡Escríbenos un mail!</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        className="form-control mb-1"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="¿Cómo te llamas? 😄"
                        required
                    />
                    {inputErrors.name && <small className="text-danger">{inputErrors.name}</small>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        className="form-control mb-1"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="¿Dónde te escribimos? 📧"
                        required
                    />
                    {inputErrors.email && <small className="text-danger">{inputErrors.email}</small>}
                </div>
                <div>
                    <label>Asunto:</label>
                    <input
                        className="form-control mb-1"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿De qué se trata? 🤔"
                        required
                    />
                    {inputErrors.subject && <small className="text-danger">{inputErrors.subject}</small>}
                </div>
                <div>
                    <label>Mensaje:</label>
                    <textarea
                        className="form-control mb-1"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="¡Cuéntanos todo! 😊"
                        required
                    ></textarea>
                    {inputErrors.message && <small className="text-danger">{inputErrors.message}</small>}
                </div>
                <button type="submit" disabled={isLoading} className="btn btn-primary mt-3">
                    {isLoading ? "Enviando..." : "Enviar"}
                </button>
            </form>
            {responseMessage && (
                <p className={`mt-3 text-center ${isError ? "text-danger" : "text-success"}`}>
                    {responseMessage}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
