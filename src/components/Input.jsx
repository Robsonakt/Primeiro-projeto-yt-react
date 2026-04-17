//Criado um componemte que otimiza e importa para não ficar repetitivo, ai no código e só chamar a função
function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
