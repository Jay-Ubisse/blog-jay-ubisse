export function generateDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let monthName = "";

  switch (month) {
    case 1:
      monthName = "Janeiro";
      break;
    case 2:
      monthName = "Fevereiro";
      break;
    case 3:
      monthName = "Março";
      break;
    case 4:
      monthName = "Abril";
      break;
    case 5:
      monthName = "Maio";
      break;
    case 6:
      monthName = "Junho";
      break;
    case 7:
      monthName = "Julho";
      break;
    case 8:
      monthName = "Agosto";
      break;
    case 9:
      monthName = "Setembro";
      break;
    case 10:
      monthName = "Outubro";
      break;
    case 11:
      monthName = "Novembro";
      break;
    case 12:
      monthName = "Dezembro";
      break;
    default:
      break;
  }

  return `${day} de ${monthName} de ${year}`;
}
