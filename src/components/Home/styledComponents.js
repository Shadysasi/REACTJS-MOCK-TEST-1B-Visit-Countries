import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 140vh;
  background-color: #161624;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
`
export const CountryList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  height: 40vh;
  border-radius: 12px;
  background-color: #334155;
  overflow-y: auto;
  list-style-type: none;
  margin-left: 140px;
`
export const VisitedCountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
export const VisitedCountriesDisplay = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`
export const EmptyHeader = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`
