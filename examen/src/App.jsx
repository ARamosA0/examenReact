import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  MenuItem
} from "@mui/material";
import "./App.css";


import { getPostulante, postPostulante, putPostulante, deletePostulante } from "./services";

function App() {
  const [dataPostulante, setDataPostulante] = useState([]);
  const [formData, setFormData] = useState({
    campo:"",
    nombre:"",
    dni: "",
    perfil: "",
    nivel: "", 
    fech_nacimiento: ""
  });

  const handleChange = (event) =>{
    const {value, name} = event.target;

    setFormData({
    ...formData,
    [name]:value,
    })
  }

  const fetchApi = async () => {
    const getDataPostulante = await getPostulante();
    setDataPostulante(getDataPostulante.content);
  };

  const onSubmit = async () => {
    const postDataPostulante = await postPostulante(formData)
    console.log(postDataPostulante)
  };

  const cambiar = async (id) => {
    console.log(formData)
    const changeData = await putPostulante(id, formData)
    console.log(changeData)
    window.location.replace('');
  }

  const eliminar = async (id) => {
    const deleteData = await deletePostulante(id)
    console.log(deleteData)
    window.location.replace('');
  }

  useEffect(() => {
    fetchApi();
  }, [dataPostulante]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>POSTULANTES</h1>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell>Campo</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>DNI</TableCell>
                  <TableCell>PERFIL</TableCell>
                  <TableCell>NIVEL</TableCell>
                  <TableCell>FECHA DE NACIMIENTO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataPostulante.length > 0 &&
                  dataPostulante.map((post, index) => (
                    <TableRow key={post.id}>
                      <TableCell component="th" scope="row">
                        {post.campo}
                      </TableCell>
                      <TableCell align="right">{post.nombre}</TableCell>
                      <TableCell align="right">{post.dni}</TableCell>
                      <TableCell align="right">{post.perfil}</TableCell>
                      <TableCell align="right">{post.nivel}</TableCell>
                      <TableCell align="right">{post.fech_nacimiento}</TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="success" onClick={()=>cambiar(post.id)}>
                          Cambiar
                        </Button>
                        <Button variant="contained" color="error" onClick={()=>eliminar(post.id)}>
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 5 }}>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2>Formulario</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Campo"
                  name="campo"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Nombre"
                  name="nombre"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="DNI"
                  name="dni"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  id="outlined-basic"
                  name="perfil"
                  label="Perfil"
                  variant="outlined"
                  value={formData.perfil}
                  onChange={handleChange}
                >
                    <MenuItem value={"FrontEnd"}>FrontEnd</MenuItem>
                    <MenuItem value={"BackEnd"}>BackEnd</MenuItem>
                  </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  type="text"
                  id="outlined-basic"
                  name="nivel"
                  label="Nivel"
                  value={formData.nivel}
                  variant="outlined"
                  onChange={handleChange}
                >
                  <MenuItem value={"Junior"}>Junior</MenuItem>
                  <MenuItem value={"Semisenior"}>Semisenior</MenuItem>
                  <MenuItem value={"Senior"}>Senior</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="date"
                  name="fech_nacimiento"
                  label="Fecha de nacimiento"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="secondary">
                  Enviar Datos
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;


