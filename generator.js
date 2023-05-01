$(document).ready(function () {
  const prefix = "62";
  const opt = [857, 823, 821, 853, 878, 856, 855, 822, 812, 888];
  const generate = () => {
    const banyak = $("#banyak").val();
    for (let i = 0; i < banyak; i++) {
      const rand = Math.floor(Math.random() * 10);
      const element = opt[rand];
      const number = Math.floor(Math.random() * 100000000);
      const generate = prefix + element + number.toString();
      $("#number").append(`${generate}\n`);
    }
  };
  $("#generate").click(() => {
    $("#number").empty();
    generate();
  });
  $("#copy").click(() => {
    let teks = $("#number").val();
    // Cek apakah Clipboard API didukung oleh browser
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Teks yang akan ditulis ke clipboard
      let textToWrite = teks;

      // Menulis teks ke clipboard
      navigator.clipboard
        .writeText(textToWrite)
        .then(function () {
          alert("Nomor telah berhasil dicopy");
        })
        .catch(function (err) {
          alert("Gagal guys", err);
        });
    } else {
      console.error("Clipboard API tidak didukung di browser ini.");
    }
  });
});
