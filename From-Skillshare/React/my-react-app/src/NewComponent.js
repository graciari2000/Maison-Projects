import styled from "styled-components";
const StyledTitle = styled.h1`

        font-size: ${ 16 * 1.5}px;
        color: #ffffff;
        background-color: brown;

        &:hover {
            text-transform: uppercase;
        }`;

const NewComponent = () => {
    return (
        <StyledTitle>
            hello<span className="upper">world !</span><h1>This is a new component</h1>
        </StyledTitle>
    )
};
export default NewComponent;
