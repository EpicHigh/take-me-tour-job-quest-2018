import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
	outline:none;
	border:none;
	}
	body {
	background:#333 url(https://static.tumblr.com/maopbtg/a5emgtoju/inflicted.png) repeat; 
  margin: 0;
  padding: 0;
  font-family: Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	transition: background-color 2s ease-out;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`

export const Margin = styled.div`
  margin-left: 12px;
  margin-bottom: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`

export const Paper = styled.form`
  color: #fff;
  font-size: 20px;
  display: flex;
`

export const Title = styled.input`
  background-color: transparent;
  border-bottom: 3px solid #fff;
  color: #fff;
  font-size: 20px;
  font-family: Courier, monospace;
  width: 20vw;
  height: 5vh;
  font-weight: bold;
`
export const Text = styled.div`
  width: 45vw;
  height: 45vh;
  overflow: hidden;
  background-color: #fff;
  color: #222;
  font-family: Courier, monospace;
  font-weight: normal;
  font-size: 24px;
  resize: none;
  line-height: 40px;
  padding: 45px 100px 34px;
  background-image: url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png),
    url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
  background-repeat: repeat-y, repeat;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  -webkit-box-shadow: 0 2px 14px #000;
  box-shadow: 0 2px 14px #000;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  word-wrap: break-word;
`

export const Button = styled.button`
  visibility: hidden;
`

export const Caution = styled.p`
  color: white;
  visibility: ${props => (props.joke ? 'visible' : 'hidden')};
`
