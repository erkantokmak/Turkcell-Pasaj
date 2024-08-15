import styled from 'styled-components'

export const FilterWrapper = styled.div`
display: block;
@media (max-width: 768px) {
display: none;
}
`;

export const FilterButton = styled.div`
display: none;
@media (max-width: 768px) {
  display: block;
}
`;

export const FilterModal = styled.div<{isOpen: boolean}>`
position: relative;
background-color: #f8f8f8;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
z-index: 999;
${({isOpen}) => isOpen ? 'display: block;' : 'display: none;'}
`;

export const FilterModalContent = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
padding: 20px 0; 
background-color: #fff;
`;

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
  background-color: #dee3ed;
  position: relative;
  transition: background-color 0.2s;
 
  ${ContratInput}:checked + & {
    background-color: #ffc900;
  }
`;

export const ContratButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 25px;
  border-radius: 45px;
  transition: 0.2s;
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

export const PaginationWrapper = styled.div`
background-color: #fff;
    border-radius: .9375rem;
    margin: 3.125rem auto;
    color: #5f6b76;
    box-shadow: 0 2px 7px -2px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const PaginationNumber = styled.button<{ active?: boolean }>`
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
border: none;
font-size: 1rem;
font-weight: 700;
background-color: ${(props) => (props.active ? "#2855ac" : "#fff")};
color: ${(props) => props.active ? '#fff' : '#5f6b76'};
`;
export const PaginationButton = styled(PaginationNumber)`
color: #2855ac;
`;