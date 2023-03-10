import React from 'react';
import Form from './Form';
import Table from './Table';

class App extends React.Component {
	state = {
		characters: [],
	}

	render() {
		return (
			<div className="container">
				<Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}

	removeCharacter = (index) => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			}),
		});
	}

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] })
	}
}

export default App;
