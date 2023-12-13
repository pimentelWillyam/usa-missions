import app from './api/app'

app.listen(process.env.PORTA, () => {
  console.log(`aplicação iniciada na porta ${process.env.PORTA}`)
})
