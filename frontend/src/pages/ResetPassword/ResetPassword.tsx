import classes from "./ResetPassword.module.css"
import { Button, Paper, TextField, Typography } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import useResetPassword from "@/hooks/useResetPassword"

function ResetPassword() {
  const [searchParams, _] = useSearchParams()
  const token = searchParams.get("token")

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleResetPassword,
  } = useResetPassword(token)
  return (
    <section className={classes.container}>
      <Paper sx={{ p: 6 }}>
        <Typography variant="h4" fontWeight={600} textAlign="center" mb={2}>
          Recuperar contraseña
        </Typography>
        {!token && (
          <Typography variant="body1" textAlign="center" mb={2}>
            Ingrese su correo electrónico para recuperar su contraseña
          </Typography>
        )}

        <TextField
          label="Email"
          placeholder="johndoe@unal.edu.co"
          type="email"
          variant="standard"
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        {token && (
          <>
            <TextField
              label="Nueva contraseña"
              type="password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Confirmar contraseña"
              type="password"
              variant="standard"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              sx={{ mt: 2 }}
            />
          </>
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleResetPassword}
        >
          Enviar
        </Button>
      </Paper>
    </section>
  )
}

export default ResetPassword
