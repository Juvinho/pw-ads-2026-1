import { useState } from 'react'

function App() {
  const [raioMaior, setRaioMaior] = useState('')
  const [raioMenor, setRaioMenor] = useState('')

  let area = ''
  if (raioMaior !== '' && raioMenor !== '') {
    area = (Number(raioMaior) * Number(raioMenor) * Math.PI).toLocaleString('pt-br', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    })
  }

  return (
    <div>
      <h1>Cálculo da área de uma elipse</h1>
      <form>
        <div>
          <label>
            <span>Medida do raio maior:</span><br />
            <input
              id="raio-maior"
              type="number"
              value={raioMaior}
              onChange={e => setRaioMaior(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Medida do raio menor:</span><br />
            <input
              id="raio-menor"
              type="number"
              value={raioMenor}
              onChange={e => setRaioMenor(e.target.value)}
            />
          </label>
        </div>
        <div id="resultado">
          {area !== '' && 'Área: ' + area}
        </div>
      </form>
    </div>
  )
}

export default App
