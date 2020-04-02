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

export const DivHeader = styled.div`
    min-height: 40px;
    widht:100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`

export const Links = styled.a`
    text-decoration: none;
    font-family: sans-serif;
    color: #03A9F4;
    font-size: 14px;
    margin: 15px;
    &:hover {
        text-decoration: underline; 
    }   
`

export const Title = styled.h1`
    font-weight: 100;
`

export const SubTitle = styled.h2`
    font-weight: 100;
`

export const Label = styled.label`
    font-size: 16px;
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
    border-bottom: ${props => props.separator ? " solid 1px #e0e0e0" : "none"};
    padding-bottom: ${props => props.separator ? " 5px" : "none"};
`

export const DivTitle = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`

export const Input = styled.input`
    margin: 5px 0px;
    border-radius: 3px;
    width: 80%;
    border: none;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 5px;
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
    padding:15px;
    flex-direction:column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    margin-top:5px;

`
export const ListContainer = styled.ul`
    padding-left:0px;
    margin:0px;
`

export const List = styled.li`
    list-style:none;
    display:${props => props.hide || "flex"};
    flex-direction: ${props => props.flexDirection ? 'column' : "row"}; 
    border: solid 1px #e0e0e0;
    padding: 10px;
    margin: 0px 0px 10px 0px;
`
export const ListSection = styled.div`
    flex: 1;
    width: ${props => props.width ? "":"25%"};
    justify-content:  ${props => props.justifyContent || "center"};
    flex-direction: ${props => props.flexDirection || "row"}; 
    align-items: center;
    align-content: center;
    display: flex;
`

export const Text = styled.p`
    text-transform:capitalize;
    text-align:center;
    margin: 5px;
`

export const Img = styled.img`
    max-width:50px;
    max-height:50px;
    width:auto;
    height:auto;
`