/* eslint-disable react/prop-types */
export default function Card(props) {
  const paragraphStyle = "m-2"

  return (
    <div className="flex flex-col items-center m-8 w-1/4 rounded-lg bg-teal-300 border-2 border-lime-500">
      <img className="w-1/2 rounded-full shadow-lg m-8" src={props.img} alt={props.img} />
      <p className={paragraphStyle}><span className="font-semibold">Name:</span> {props.name}</p>
      <p className={paragraphStyle}>{props.origin.name === "unknown" ? "Origin unknown" : `${props.gender === "Male" ? "He" : "She"} is from ${props.origin.name}`}</p>
    </div>
  )
}

