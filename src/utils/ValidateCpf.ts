import { ErrorPrivate } from "../helpers/ErrorPrivate";

export function validateCpf(cpf: string) {
  const cpfFormated = cpf.replace(/\D/g, "");

  if (cpfFormated.length < 11) {
    throw new ErrorPrivate("informed invalid cpf!", 404);
  }

  var sum;
  var Rest;
  sum = 0;
  if (cpfFormated == "00000000000") {
    throw new ErrorPrivate("informed invalid cpf!", 404);
  }

  for (var i = 1; i <= 9; i++)
    sum = sum + parseInt(cpfFormated.substring(i - 1, i)) * (11 - i);
  Rest = (sum * 10) % 11;

  if (Rest == 10 || Rest == 11) Rest = 0;
  if (Rest != parseInt(cpfFormated.substring(9, 10))) {
    throw new ErrorPrivate("informed invalid cpf!", 404);
  }

  sum = 0;
  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(cpfFormated.substring(i - 1, i)) * (12 - i);
  Rest = (sum * 10) % 11;

  if (Rest == 10 || Rest == 11) Rest = 0;
  if (Rest != parseInt(cpfFormated.substring(10, 11))) {
    throw new ErrorPrivate("informed invalid cpf!", 404);
  }
  return cpfFormated;
}
