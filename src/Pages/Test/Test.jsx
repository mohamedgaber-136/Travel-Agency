import {useParams} from 'react-router'
export const Test = () => {
  let {countryTitle} = useParams();
  console.log(countryTitle);

  return <>hello</>;
};
