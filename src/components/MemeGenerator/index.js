import {Component} from 'react'
import {
  AppContainer,
  ContentContainer,
  Heading,
  FormContainer,
  Label,
  Input,
  Dropdown,
  Option,
  GenerateButton,
  MemeContainer,
  MobMemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isMemeGenerated: false,
  }

  onImageUrlChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({isMemeGenerated: true})
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      isMemeGenerated,
    } = this.state
    return (
      <AppContainer>
        <ContentContainer>
          <Heading>Meme Generator</Heading>
          {isMemeGenerated && (
            <MobMemeContainer bgImage={imageUrl}>
              <MemeText fontSize={fontSize}>{topText}</MemeText>
              <MemeText fontSize={fontSize}>{bottomText}</MemeText>
            </MobMemeContainer>
          )}
          <FormContainer onSubmit={this.onSubmit}>
            <Label htmlFor="imageUrl">Image Url</Label>
            <Input
              id="imageUrl"
              value={imageUrl}
              placeholder="Enter The Image Url"
              onChange={this.onImageUrlChange}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              id="topText"
              placeholder="Enter The Top Text"
              value={topText}
              onChange={this.onTopTextChange}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              id="bottomText"
              placeholder="Enter The Bottom Text"
              value={bottomText}
              onChange={this.onBottomTextChange}
            />
            <Label htmlFor="fontSize">Font Size</Label>
            <Dropdown
              id="fontSize"
              value={fontSize}
              onChange={this.onFontSizeChange}
            >
              {fontSizesOptionsList.map(eachObj => (
                <Option key={eachObj.optionId} value={eachObj.optionId}>
                  {eachObj.displayText}
                </Option>
              ))}
            </Dropdown>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </ContentContainer>
        {isMemeGenerated && (
          <MemeContainer bgImage={imageUrl} data-testid="meme">
            <MemeText fontSize={fontSize}>{topText}</MemeText>
            <MemeText fontSize={fontSize}>{bottomText}</MemeText>
          </MemeContainer>
        )}
      </AppContainer>
    )
  }
}

export default MemeGenerator
