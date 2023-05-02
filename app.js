/*burda butona basılınca özellikleri açması için fonksiyon yazıyoruz.*/
/* js de sabit değişkenleri tanımlıyoruz cssleri ile eşleştiriyoruz*/
const modalBtn = document.getElementById("modal-ac");
const modal = document.querySelector(".modal");
const modalKapat = document.getElementById("modal-kapat")
/*burda modal aç butonuna basınca modal aç id sine bağlı div'in display kısmına none den flex e çekiyoruz.*/
modalBtn.addEventListener("click", () =>{
    modal.style.display="flex";
})
/*burda modal kapat butonuna basınca modal aç id sine bağlı div'in display kısmına flex den none a çekiyoruz.*/
modalKapat.addEventListener("click", () =>{
    modal.style.display="none";
})

// Arkaplan renk değiştirme
const backround = document.getElementById("backround"); //arkaplan botununu seçiyoruz ve sabit değişkene bağlıyoruz.
const body = document.querySelector("body"); // arka plan rengi için body seçiyoruz ve sabitliyoruz  değişkene.
const colors = ["#000000", "#8D7B68", "#C8B6A6","#F1DEC9", "#FFF3E2","#BFCCB5", "#ffffff" ]; // burda arka plan rengi olmasını isteğimiz renkleri  array dizisine yazdık.

backround.addEventListener("click", arkaplandeğistirme); // burda bi fonskiyon yazıyoruz butona her click yapıldığında arkaplan rengi değişmesi için.

function arkaplandeğistirme(){
    // rastgele bir renk seçmek 
    const rastgeleSayi = Math.floor(Math.random() * colors.length); // burda rastgelesayi diye değişken tanılmıyoruz ve colors dizisindeki eleman sayısı kadar random sayı ile çarpıyoruz. (math.random 0 ile 1 sayı aralığında sayı üretir) soncuu da math.floor yapıyoruz örn 2.6 gelirse 2 ye yuvarlasın diye.
    const secilenRenk = colors[rastgeleSayi]; // burda secilenrenk diye değişken tanımladık ve bunu colors dizisindeki seçilen rastgelesayi ya eşitledik.
    // console.log(rastgeleSayi, secilenRenk); //burda denemek amaçlı consolo yazdırdım.
    body.style.backgroundColor = secilenRenk; // burda da bodynin backroundcolorunu secilen renk ile değiştirdik.
}

function addToCart() {
    // Sepet sayfasına ekleme kodu buraya gelecek
    alert("Ürün sepete eklendi!");
  }



  
// Tüm ürünlerin bulunduğu div'i seç
const productsContainer = document.querySelector('.Products');

// Her ürünün bulunduğu div'leri seç
const productDivs = productsContainer.querySelectorAll('.Product');
getLocalStorage();
// Her bir ürün için tıklanmayı ekle
productDivs.forEach((product) => {
    // Ürün div'inin içindeki başlık etiketini ve fiyatı seç
    const productImage = product.querySelector('.Product Img')
    const productName = product.querySelector('.Product h2').textContent;
    const productPrice = product.querySelector('.Product h3').textContent;})

// "sipariş ver" butonunu seç ve tıklanma olayını ekle
const detailButton = product.querySelector('.btnProduct');
detailButton.addEventListener('click', () => {
// Gizli div'i seç ve içeriğini güncelle
const hiddenDiv = document.querySelector('.sepet'); 
hiddenDiv.innerHTML += `<p class = "eklenenUrun" id = "eklenenUrun">${productName} - ${productPrice}</p> <div class=deleteBtn></div>`;
saveLocalStorage();
});
