import style from './CaninoInfo.module.css'

export default function CaninoInfo({canino}) {
  return (
    <div className={style['lista-canino']}>
        <li>
          <h2><strong>{canino.nombre}</strong></h2>

          <div className={style['div-canino']}>

            <div className={style['div-datos']}>
              <p><strong>Edad:</strong> {canino.edad}</p>
              <hr />
              <p><strong>Sexo:</strong> {canino.sexo}</p>
              <hr />
              <p><strong>Raza:</strong> {canino.raza}</p>
              <hr />
              <p><strong>Tamaño:</strong> {canino.tamaño}</p>
              <hr />
            </div>

            <div className={style['div-imagen']}>
              <img className={style['imagen']} src={canino.imagen} alt={canino.nombre} />
            </div>

          </div>
        </li>
     
    </div>
  )
}
