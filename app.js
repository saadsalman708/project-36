function submitBtnClicked() {
    Swal.fire({
        imageUrl: 'https://i.imgflip.com/5ogsij.jpg',
        imageUrl: 'https://i.imgflip.com/787f7h.jpg',

        customClass: {
            class: 'swal-responsive-img'
        },

        showConfirmButton: true,
        backdrop: true,
        allowOutsideClick: true,

        didOpen: () => {
            Swal.getPopup().addEventListener('click', () => {
                Swal.close();
            });
        }
    });
}