import './text-responsive-to-container-size.css'

const TextResponsiveToContainerSize = ({ text }) => {
  return (
    <svg className='responsive-text' viewBox='0 0 60 17'>
      <text
        x='50%'
        y='50%'
        dominantBaseline='central'
        textAnchor='middle'
      >
        {text}
      </text>
    </svg>
  )
}

export default TextResponsiveToContainerSize
