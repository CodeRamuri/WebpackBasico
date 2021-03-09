import { join } from 'lodash-es';

export function component()
{
  const element = document.createElement('div')
  element.innerHTML = join
  (
   [
    "Esto puede ser un problemaj ", "webpack"
   ],
   ""
  );
  return element;
}
