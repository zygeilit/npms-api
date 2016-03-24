'use strict';

const config = require('config');
const ElasticSearch = require('elasticsearch');
const Search = require('./search');

// Controller dependencies

const container = {};
container.elasticClient = new ElasticSearch.Client(config.get('elasticSearch'));
container.search = new Search(container.elasticClient);

module.exports = container;