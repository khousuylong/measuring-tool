import axios from 'axios';

const columnValues = [{"value":"Indiana","count":"1"},{"value":"Tennessee","count":"1"},{"value":"Pennsylvania","count":"1"},{"value":"Alabama","count":"1"},{"value":"Wisconsin","count":"1"},{"value":"Colorado","count":"1"},{"value":"Virginia","count":"3"},{"value":"South Carolina","count":"1"},{"value":"Vermont","count":"1"},{"value":"Minnesota","count":"1"},{"value":"Georgia","count":"1"},{"value":"Kentucky","count":"2"},{"value":"New York","count":"3"},{"value":"Connecticut","count":"1"},{"value":"North Dakota","count":"1"},{"value":"North Carolina","count":"4"},{"value":"New Hampshire","count":"1"},{"value":"New Mexico","count":"1"},{"value":"Arkansas","count":"1"},{"value":"Ohio","count":"1"},{"value":"Florida","count":"5"},{"value":"West Virginia","count":"1"},{"value":"Idaho","count":"1"},{"value":"Wyoming","count":"1"},{"value":"Nevada","count":"1"},{"value":"Texas","count":"6"},{"value":"Oklahoma","count":"1"},{"value":"Iowa","count":"1"},{"value":"Missouri","count":"1"},{"value":"Delaware","count":"1"},{"value":"Mississippi","count":"1"},{"value":"Maryland","count":"2"},{"value":"Oregon","count":"1"},{"value":"Washington","count":"7"},{"value":"South Dakota","count":"1"},{"value":"District of Columbia","count":"1"},{"value":"Massachusetts","count":"3"},{"value":"Montana","count":"1"},{"value":"Illinois","count":"1"},{"value":"California","count":"5"},{"value":"Utah","count":"1"},{"value":"Maine","count":"3"},{"value":"Arizona","count":"1"},{"value":"Michigan","count":"1"},{"value":"Rhode Island","count":"3"},{"value":"Louisiana","count":"2"},{"value":"Kansas","count":"1"},{"value":"Nebraska","count":"1"},{"value":"New Jersey","count":"1"}];

const classificationValues = [0.3,7.7,34.1,114.2,146.8,236.9,518.8,5505.1,69240.6,157127.4];

const getMap = async(id) =>{
  return (await axios.get(`http://localhost:3004/maps/${id}`, { headers: {"Content-Type": "application/json"}})).data;
} 

const resolvers = {
  Query: {
    map: async (root, args, context, info) => {
      const mapData = await getMap(args.id); 
      return mapData; 
    },
    layerGroup: async (root, args, context, info) => {
      const response = await axios.get(`http://localhost:3004/layerGroups/${args.id}`);
      return response.data;
    },
    layer: async (root, args, context, info) => {
      return (await axios.get(`http://localhost:3004/layers/${args.id}`)).data;
    },

    columnValues: (root, args, context, info) => {
      return columnValues;
    },

    classificationValues: (root, args, context, info) => {
      return {column: args.column, values: classificationValues.slice(0, args.classNumber + 1)}
    },

    datasets: async (root, args, context, info) => {
      const response = await axios.get('http://localhost:3004/datasets');
      return response.data;
    },
    paginateDatasets: async (root, args, context, info) => {
      const {offset, limit} = args;
      const response = await axios.get(`http://localhost:3004/datasets?_page=${offset}&_limit=${limit}`); 
      return response.data;
    },
    searchDatasets: async (root, args, content, info) => {
      return (await axios.get(`http://localhost:3004/datasets?name_like=${args.text}`)).data; 
    },
    symbol: async (root, args, context, info) => {
      return (await axios.get(`http://localhost:3004/symbols/${args.id}`)).data;
    },
    customIcons: async (root, args, context, info) => {
      return (await axios.get(`http://localhost:3004/customIcons`)).data;
    },
    savedSymbols: async (root, args, context, info) => {
      const response = await axios.get(`http://localhost:3004/savedSymbols`);
      return response.data;
    }
  },

  Mutation: {
  },

  Map: {
    async layerGroups(map){
      const layerGroups = (await axios.get(`http://localhost:3004/maps/${map.id}?_embed=layerGroups`)).data.layerGroups;
      layerGroups.sort(function(a, b) {
        return a.index - b.index;
      });
      return layerGroups;
    }
  },

  LayerGroup: {
    async map(lg){
      return (await axios.get(`http://localhost:3004/maps/${lg.mapId}`)).data
    },
    async layers(lg){
      const layers = (await axios.get(`http://localhost:3004/layerGroups/${lg.id}?_embed=layers`)).data.layers;
      const orderLayers = [];
      for (var i = 0, len = lg.layerIds.length; i < len; i++) {
        const id = lg.layerIds[i];
        orderLayers.push(layers.find(layer => layer.id === id))
      }
      return orderLayers;
    }
  }
};

export {resolvers};
