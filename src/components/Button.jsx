//Criado um componemte que otimiza e importa para não ficar repetitivo, ai no código e só chamar a função
function Button(props) {
  return (
    <button {...props} className="bg-slate-400 text-white p-2 rounded-md">
      {props.children}
    </button>
  );
}

export default Button;
