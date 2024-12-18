import {Input} from "antd";
import {useRef} from "react";
import {useLoginMutation} from "../../redux/api/postApi";
import {useNavigate} from "react-router-dom";

const LoginComp = () => {
	let navigate = useNavigate();
	let emailRef = useRef(null);
	let passwordRef = useRef(null);

	let [login, {isLoading, error}] = useLoginMutation();

	let submit = async (e) => {
		e.preventDefault();
		let email = emailRef.current?.input?.value;
		let password = passwordRef.current?.input?.value;

		if (!email || !password) {
			return alert("Iltimos email va parolni kiriting!");
		}

		try {
			let response = await login({email, password}).unwrap();
			localStorage.setItem("token", response.access_token);
			navigate(`/`);
		} catch (error) {
			console.error("Xatolik yuz berdi:", error);
			alert("Xatolik yuz berdi!");
		}

		emailRef.current.input.value = "";
		passwordRef.current.input.value = "";
	};
	return (
		<section>
			<form
				onSubmit={submit}
				className="flex flex-col items-center justify-center h-screen gap-4 w-[20em] mx-auto">
				<Input ref={emailRef} placeholder="john@mail.com" />
				<Input.Password ref={passwordRef} placeholder="changeme" />
				<button
					type="submit"
					className="px-[2.5em] py-2 rounded-md text-white font-medium bg-blue-600">
					{isLoading ? "Yuklanmoqda..." : "Login"}
				</button>
				{error && (
					<p className="mt-2 text-red-500">
						Xatolik yuz berdi: {error.data.message}
					</p>
				)}
			</form>
		</section>
	);
};

export default LoginComp;
