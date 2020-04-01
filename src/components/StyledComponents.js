import styled from 'styled-components'

export const DivContainer = styled.div`
    width:100%;
    min-height:calc(100vh);
    display:flex;
    justify-content: center;
    align-items: ${props => props.fullWidth ? "normal": "center"} ;
    align-content: center;
    font-family: sans-serif;
    background-color: #eaeaea;
    flex-direction: ${props => props.fllexDirection || "row"};
`
export const CenterBlock = styled.div`
    display:flex;
    width:300px;
    height:auto;
    flex-direction: column;
    background: #fff;
    padding: 15px; 
    border-radius:3px;
`

export const DivRow = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    margin: 5px 0;
`
export const DivRowHorizontal = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    margin: 5px 0;
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: center;
`

export const DivTitle = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`

export const Input = styled.input`
    padding: 7px 15px;
    border: 1px solid #bdbdbd;
    margin: 5px 0px;
    border-radius: 3px;
`

export const ButtonBtn = styled.button`
    width: ${props => props.fullWidth ? "" : "fit-content"} ;
    display: block;
    padding: 7px 15px;
    border: none;
    background-color: ${props => props.color || "#00b1ff"};
    color: white;
    border-radius: 3px;   
    margin: ${props => props.margin || "unset"};
    height: fit-content;
    box-shadow: ${props => props.active === 'active' ? "0px 0px 3px 3px #0d4069" : "none"};
`

export const DivBlock = styled.div`
    height:${props => props.height || "80%"};
    background: white;
    flex:1;
    margin:15px; 
    border-radius:3px;
    padding:15px;
    flex-direction:column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;

`
export const ListContainer = styled.ul`
    padding-left:0px;
`

export const List = styled.li`
    list-style:none;
    display:flex;
    flex-direction: row;
    border: solid 1px #e0e0e0;
    padding: 15px;
    margin: 15px 0px;
`
export const ListSection = styled.div`
    flex-grow:${props => props.flexGrow || "1"};
    display: flex;
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: center;
`

export const Text = styled.div`
    flex-grow:${props => props.flexGrow || "1"};
    text-transform:capitalize;
    flex-basis: 50%;
`