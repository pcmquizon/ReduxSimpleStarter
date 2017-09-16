import axios from 'axios';

import { BLOG_ROOT_URL, BLOG_QUERY_STRING_API_KEY } from '../config';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
  const url = `${BLOG_ROOT_URL}/posts${BLOG_QUERY_STRING_API_KEY}`
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
};

export function createPost(values, callback) {
  const url = `${BLOG_ROOT_URL}/posts${BLOG_QUERY_STRING_API_KEY}`
  const request = axios.post(url, values)
                       .then(() => {
                          callback();
                        });

  return {
    type: CREATE_POST,
    payload: request,
  };
};

export function fetchPost(id) {
  const url = `${BLOG_ROOT_URL}/posts/${id}${BLOG_QUERY_STRING_API_KEY}`
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request,
  };
};

export function deletePost(id, callback) {
  const url = `${BLOG_ROOT_URL}/posts/${id}${BLOG_QUERY_STRING_API_KEY}`
  const request = axios.delete(url)
                       .then(() => {
                          callback();
                        });

  return {
    type: DELETE_POST,
    payload: request,
  };
}
