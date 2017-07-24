import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    wrapper: {
        padding: 5,
        margin: 10
    },
    title: {
        marginTop: 10
    },
    item: {
        cursor: 'pointer'
    },
    content: {
        minHeight: 50
    }
};

export default class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            noteIndex: -1
        };
    }

    handleNoteClick(noteIndex) {
        this.setState({ noteIndex });
    }

    renderNotes(notes) {
        return notes.map( (note, i) => {
            let { id, name } = note;

            return (
                <li key={id} onClick={this.handleNoteClick.bind(this, i)} style={styles.item}>{name}</li>
            );
        });
    }

    renderNoteContent(notes, noteIndex) {
        if(!notes.length || noteIndex === -1) { return null; }

        let note = notes[noteIndex];
        let { content } = note;

        return (
            <div style={styles.content}>
                {content}
            </div>
        );
    }

    render() {
        let { noteIndex } = this.state;
        let { notes } = this.props;

        return (
            <div style={styles.wrapper}>
                <h1 style={styles.title}>My Notes Example</h1>
                <ul style={styles.notes}>
                    { this.renderNotes(notes) }
                </ul>
                { this.renderNoteContent(notes, noteIndex) }
            </div>
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired
};

Notes.defaultProps = {
    notes: []
};