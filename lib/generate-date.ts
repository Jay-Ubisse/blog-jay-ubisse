export function generateDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let monthName = "";

  switch (month) {
    case 0:
      monthName = "Janeiro";
      break;
    case 1:
      monthName = "Fevereiro";
      break;
    case 2:
      monthName = "Março";
      break;
    case 3:
      monthName = "Abril";
      break;
    case 4:
      monthName = "Maio";
      break;
    case 5:
      monthName = "Junho";
      break;
    case 6:
      monthName = "Julho";
      break;
    case 7:
      monthName = "Agosto";
      break;
    case 8:
      monthName = "Setembro";
      break;
    case 9:
      monthName = "Outubro";
      break;
    case 10:
      monthName = "Novembro";
      break;
    case 11:
      monthName = "Dezembro";
      break;
    default:
      break;
  }

  return `${day} de ${monthName} de ${year}`;
}
