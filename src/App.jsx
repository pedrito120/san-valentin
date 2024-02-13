import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 11,
    description: "Di si por favor",
    img: "https://i.gifer.com/3FaY.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo.",
    img: "https://i.gifer.com/20NI.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "https://i.gifer.com/2EUy.gif"
  },
  {
    id: 3,
    description: "No tengas miedo, será genial.",
    img: "https://i.gifer.com/1Gl4.gif"
  },
  {
    id: 4,
    description: "Confía en mí, será divertido.",
    img: "https://usagif.com/wp-content/uploads/snow-white-6.gif"
  },
  {
    id: 5,
    description: "No tengas dudas, te hará sonreír.",
    img: "https://i.gifer.com/3c64.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "https://i.gifer.com/259X.gif"
  },
  {
    id: 7,
    description: "No dejes que el miedo te detenga.",
    img: "https://i.makeagif.com/media/5-24-2017/r4Edz3.gif"
  },
  {
    id: 8,
    description: "Confía en el destino, nos está dando una señal.",
    img: "https://i.pinimg.com/originals/6c/a5/e8/6ca5e81893bc5534f1dc4464c861e3e0.gif"
  },
  {
    id: 9,
    description: "Confía en mí.",
    img: "https://usagif.com/wp-content/uploads/snow-white-22.gif"
  },
  {
    id: 10,
    description: "No te arrepentirás.",
    img: "https://usagif.com/wp-content/uploads/snow-white-32.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 1000) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center m-5">¿Quieres ser mi San Valentin?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://usagif.com/wp-content/uploads/snow-white-27.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-auto md:grid-cols-auto mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘','🤗','🤗','🤭','🫢','🫣','😍','😚','☺️','❣️','💞','💕','💓','🧡','💘','🫰','🫰','🫰','🫰','🫶','🤫'],
                  emojiSize: 70,
                  confettiNumber: 500,
                })

              }} className={`bg-pink-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-cyan-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">Sabia que dirias que si ❤️!</h1>
            <img src="https://hips.hearstapps.com/hmg-prod/images/blancanieves-2-1535122549.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
