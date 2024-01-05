import {
  CountryListItem,
  CountryName,
  VisitPara,
  VisitButton,
} from './styledComponents'

const CountriesList = props => {
  const {countryDetails, clickVisitItem} = props
  const {id, name, isVisited} = countryDetails
  const visitText = isVisited ? 'Visited' : 'Visit'

  const onClickVisitBtn = () => {
    clickVisitItem(id)
  }

  return (
    <CountryListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitPara>{visitText}</VisitPara>
      ) : (
        <VisitButton type="button" onClick={onClickVisitBtn}>
          {visitText}
        </VisitButton>
      )}
    </CountryListItem>
  )
}

export default CountriesList
