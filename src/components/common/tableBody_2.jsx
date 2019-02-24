import React, { Component } from "react";
import LikeButton from "./likeButton";

class TableBody extends Component {
  //state = {  }
  render() {
    const { movies, likes, handleLike, handleDelete } = this.props;

    return (
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <th scope="row">{movie.title}</th>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <LikeButton
                liked={likes.includes(movie._id)}
                item={movie}
                onLike={() => handleLike(movie)}
              />
            </td>
            <td>
              <button //button.btn.btn-danger.btn-sm + will add another item
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
