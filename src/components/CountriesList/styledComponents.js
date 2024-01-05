import styled from 'styled-components'

export const CountryListItem = styled.li`
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 1px solid #94a3b8;
  margin: 10px;
  padding: 2px;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
`

export const VisitPara = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  margin-right: 5px;
  margin-bottom: 10px;
`
export const VisitButton = styled.button`
  justify-content: space-around;
  background-color: ${props => (props.isVisit ? 'transparent' : '#3b82f6')};
  color: ${props => (props.isVisit ? '#94a3b8' : '#ffffff')};
  width: 80px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`
