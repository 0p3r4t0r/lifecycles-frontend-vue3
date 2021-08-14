type MaterialStyle = "outlined" | "round" | "sharp" | "two-tone"

const Icon = (props: { name: string, materialStyle?: MaterialStyle }) => {
  const iconClass = "material-icons" + (props.materialStyle ? `-${props.materialStyle}` : "") 
  return (<span class={iconClass}>{props.name}</span>)
}

export default Icon