/// THIS DOCUMENT IS ONLY AN EXAMPLE GUIDE USED FOR REFERENCING WHEN WRITING YOUR CODE
/// (This file will not be included in the final project)



// Remember to ALWAYS write this before using import:
/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";



const GuideLines = () => {

    // Remember to write "useTheme()" when wanting to use a theme from outside the component.
    const theme = useTheme();



    // Write your styles inside the components using "@emotion" to keep the Html and their styles in the same file.
    // Remember to always import "css" from "@emotion/css", when wanting to use @emotion to style your components.
    // if you get an error when styling, try reinstalling "@emotion" by writing this: $ npm install @emotion/react

    // You can also use variables as colors if you need to.
    const hoverColor = "blue";

    const styles = css`
        .Header {
            padding: 20px;
            background-color: ${theme.backgroundColor};

            .Header__item {
                color: red;
            };

            &:hover {
                .Header__item {
                    color: ${hoverColor};
                };
            };
        };
    `;



    // Always try to use the most relevant names when choosing an element and it´s class-name.
    // Try to always use BEM syntax or something as close as possible, if it makes sense.
    // When making elements inside a template, try to see if it can be made into a component instead, if it is possible for it to be reused.
    // When choosing where to add the "css" property, try to add it to the surrounding , like a container or wrapper.
    return (
        <div className="GuideLines" css={styles}>
            <header className="Header">
                <p className="Header__item">
                    Header item
                </p>
            </header>
        </div>
    );
}
 
export default GuideLines;