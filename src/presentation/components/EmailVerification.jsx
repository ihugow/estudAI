import React, { useState } from 'react'
import { sendEmailVerification } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

import { MdMarkEmailRead } from "react-icons/md";

const EmailVerification = () => {

    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleResendEmail = async () => {
        setLoading(true);
        setMessage("");
        setError("");

        try {
            await sendEmailVerification(user);
            setMessage("Email de verificação reenviado com sucesso!");
        } catch (error) {
            console.error("Erro ao reenviar email:", error);
            setError("Erro ao reenviar email. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    }

  return (
    <section className='flex justify-center items-center flex-col'>
        <MdMarkEmailRead className='size-28 text-blue-500'/>
        <h1 className="text-white text-2xl text-center">
            Verifique seu Email.
        </h1>
        <p className="mt-6 text-paragraph text-base  text-center">
            Nós enviamos um email de verificação para o seu endereço de e-mail. Clique no link para verificar sua conta e completar seu cadastro.
        </p>
        
        {message && <p className="mt-4 text-green-400 text-sm">{message}</p>}

      {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

        <button 
        onClick={handleResendEmail}
        className="mt-6 mx-auto py-2 px-4 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300"
        disabled={loading}>
            {loading ? "Reenviando..." : "Reenviar Email"}
        </button>
    </section>
  )
}

export default EmailVerification