function getElementWidth(content, padding, border){
 // İçerik genişliğini, padding ve border değerlerini sayısal değerlere dönüştür
 const contentWidth = parseFloat(content);
 const paddingWidth = parseFloat(padding);
 const borderWidth = parseFloat(border);

 // Toplam genişliği hesapla: content + 2*padding + 2*border
 const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

 // Toplam genişliği döndür
 return totalWidth;
}
// Testler
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200