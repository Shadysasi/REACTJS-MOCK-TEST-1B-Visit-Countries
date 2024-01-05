import styled from 'styled-components'

export const VisitedCountriesListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
`
export const CountryImage = styled.img`
  height: 80px;
  width: 200px;
`
export const NameAndRemoveBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  color: #cbd5e1;
`
export const RemoveBtn = styled.button`
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  color: #cbd5e1;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`
