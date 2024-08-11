import styled from 'styled-components'

export const FilterCard = styled.div`
border-radius: .625rem;
background-color: #f5f7f9;
border: 1px solid #dce1e6;
width: 268px;
`;

export const FilterItem = styled(FilterCard)`
border:none;
border-radius: 0;
border-bottom: 1px solid #dce1e6;
width: 100%;
padding: 16px 20px;
max-height: 200px;
overflow-y: auto;
&::-webkit-scrollbar {
width: 5px;
padding-right: 7px;
} 
&::-webkit-scrollbar-track {
background: lightgrey;
}
&::-webkit-scrollbar-thumb {
background-color: #253342;
}
`;

export const ContratInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const ContratLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 100px;
  background-color: #d3d3d3;
  border: 2px solid gray;
  position: relative;
  transition: background-color 0.2s;
 
  ${ContratInput}:checked + & {
    background-color: #ffc900;
  }
`;

export const ContratButton = styled.span`
  content: "";
  position: absolute;
  top: 1px;
  left: 2px;
  width: 30px;
  height: 25px;
  border-radius: 45px;
  transition: 0.2s;
  background: grey;
  background-color: #fff;
  ${ContratInput}:checked + ${ContratLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    
  }

  ${ContratLabel}:active & {
    width: 45px;
  }
`;

export const FilterSearchWrapper = styled.div`
position: relative;
`;

export const FilterSearch = styled.input`
font-size: .875rem;
line-height: 1.29;
width: 100%;
height: 100%;
font-weight: 500;
border-radius: .625rem;
color: #8e9fad;
padding: 1rem;
padding-left: 3rem;
&:focus {
outline: none;
}
`;

export const SortingButton = styled.input`
display: none;
`;

export const SortingLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 15px;
  font-size: 16px;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid grey;
    border-radius: 50%;
    background: white;
  }

  ${SortingButton}:checked + &::before {
    border:1px solid #8e9fad; 
  }

  ${SortingButton}:checked + &::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffc900; 
  }

 ${SortingButton}:checked + & {
     font-weight: 700;
     font-size: 16px;
 }
`;

export const FilterCheckInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const FilterCheck = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 5px;
  font-size: 16px;
  user-select: none;
  
  &:before {
    content: "";
    position: relative;
    display: flex;
    align-items: center;
    left: 0;
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    background: white;
    margin-right: 10px;
  }

  ${FilterCheckInput}:checked + &:before {
    content: "✔";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #ffc900;
  }
`;

export const FilterCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;