import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors,  } } = useForm();

  function entrar(data) {
    // data é um objeto com os dados do formulário
    console.log("Login!")
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <hr/>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            {...register("email")}
            />
            {errors.email && <span className="error">Email inválido</span>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className="form-control" 
            {...register("senha")}
            />
            {errors.senha && <span className="error">Senha inválida</span>}
            {errors.email && <small className="invalid">O Email é Invalido</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Entrar
        </Button>
        <Button variant="danger" className="mt-1 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Login;