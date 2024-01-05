import {
  VisitedCountriesListItem,
  CountryImage,
  NameAndRemoveBtnContainer,
  CountryName,
  RemoveBtn,
} from './styledComponent'

const VisitedCountriesList = props => {
  const {visitedCountryDetails, clickVisitItem} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickRemoveBtn = () => {
    clickVisitItem(id)
  }

  return (
    <VisitedCountriesListItem>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <NameAndRemoveBtnContainer>
        <CountryName>{name}</CountryName>
        <RemoveBtn type="button" onClick={onClickRemoveBtn}>
          Remove
        </RemoveBtn>
      </NameAndRemoveBtnContainer>
    </VisitedCountriesListItem>
  )
}

export default VisitedCountriesList
