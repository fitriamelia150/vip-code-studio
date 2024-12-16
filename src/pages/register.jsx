import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister/>
            <p className="text-sm mt-5 text-center">Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">Sign in</Link>
            </p>
        </AuthLayouts>
    )
}

export default RegisterPage