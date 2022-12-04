import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  padding: '4px 8px',
  border: 0,
  borderRadius: 4,

  span: {
    fontSize: 30,
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export default function Home() {
  return (
    <Button>
      <span>teste</span>
      Enviar
    </Button>
  )
}
