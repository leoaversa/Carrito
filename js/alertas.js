
//SUSCRIPCIÓN
const suscripcion = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Gracias por suscribirte",
    text: "¡Recibirás las mejores ofertas!",
    showConfirmButton: true,
    timer: 3000,
  });
};


//BUSCANDO
const alertBuscando = () => {
let timerInterval;
Swal.fire({
  title: "Buscando",
  html: "",
  timer: 600,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const b = Swal.getHtmlContainer().querySelector("b");
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft();
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  },
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
}

//GRACIAS POR TU COMPRA
    const alertGracias = () => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "¡Gracias por tu compra!",
          text: "Tu envío esta en camino",
          showConfirmButton: true,
          timer: 5000,
        });
      };

//ELIMINAR DEL CARRITO
const alertEliminar = () =>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 800
      })  

}