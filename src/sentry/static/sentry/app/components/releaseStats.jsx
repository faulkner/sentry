import React from 'react';
import Avatar from './avatar';
import TooltipMixin from '../mixins/tooltip';
import {t} from '../locale';

const ReleaseStats = React.createClass({
  propTypes: {
    release: React.PropTypes.object,
  },

  mixins: [
    TooltipMixin({
      selector: '.tip'
    }),
  ],

  render() {
    let release = this.props.release;
    let commitCount = release.commitCount || 0;
    let authorCount = release.authors && release.authors.length || 0;
    if (commitCount === 0) {
      return null;
    }
    return (
      <div className="release-info">
        <div><b>{commitCount}{t(' commits by ')}{authorCount}{t(' authors')}</b></div>
        {release.authors.map(author => {
          return (
            <span className="assignee-selector tip"
                 title={author.name + ' ' + author.email}>
              <Avatar user={author}/>
            </span>
          );
        })}
      </div>
    );
  }
});

export default ReleaseStats;
