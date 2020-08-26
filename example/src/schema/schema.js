const typeDefs = `
  scalar Upload
  type Map {
    id: ID!
    name: String 
    description: String 
    center: Center 
    zoom: Int 
    basemap: String 
    layerGroupIds: [String]
    layerGroups: [LayerGroup] 
    copyright: String 
    thumbnail: String
    url: String 
  }

  type LayerGroup {
    id: ID! 
    visible: Boolean
    name: String
    tileType: String
    url: String
    subdomains: [String]
    layerIds: [ID]
    layers: [Layer] 
    mapId: ID
    map: Map
  }

  type Layer{
    id: ID!
    name: String
    description: String
    type: String
    layerGroupId: ID!
    datasetId: ID!
    inLegend: Boolean
    minZoom: Int
    maxZoom: Int
    legend: String
    titleProperty: String
    symbolId: ID!
    propertyFormats: String 
    htmlTemplate: String
    template: String 
    columns: [String] 
  }

  type ColumnValue{
    value: String
    count: Int
  }

  type Symbol{
    id: ID!
    xml: String
  }

  type SavedSymbol{
    id: ID!
    symbol: String
  }

  type CustomIcon{
    id: ID!
    url: String
  }

  type Dataset {
    id: ID!
    name: String
    description: String
    type: String
    metaData: String
  } 

  type Center {
    type: String
    coordinates: [Float] 
  }

  type File {
    name: String!
  }

  type ClassificationValue{
    column: String!
    values: [Float]
  } 

  type Query{
    map(id: ID!): Map 
    layerGroup(id: ID!): LayerGroup
    layerGroups: [LayerGroup]
    layer(id: ID!): Layer
    datasets: [Dataset]
    paginateDatasets(limit: Int, offset: Int): [Dataset]
    searchDatasets(text: String): [Dataset]
    symbol(id: ID!): Symbol
    customIcons: [CustomIcon]
    savedSymbols: [SavedSymbol]
    columnValues(layerId: ID!, column: String): [ColumnValue]
    classificationValues(layerId: ID!, column: String, classNumber: Int): ClassificationValue
  }

  input MapInput{
    id: ID!
    name: String
    description: String 
    center: CenterInput 
    zoom: Int 
    basemap: String 
    copyright: String 
    thumbnail: String
    url: String
  }

  input CenterInput {
    type: String
    coordinates: [Float]
  }

  input LayerGroupInput{
    id: ID!, 
    visible: Boolean, 
    name: String, 
    tileType: String, 
    url: String, 
    subdomains: [String]
  }

  input LayerInput{
    id: ID!, 
    name: String, 
    description: String, 
    inLegend: Boolean, 
    minZoom: Int, 
    maxZoom: Int
  }
  
  input DatasetInput{
    id: ID!, 
    layerGroupId: ID!, 
    datasetId: ID!, 
    name: String, 
    description: String
    metaData: String
    type: String
  }

  input ReorderLayerInput{
    id: ID!
    origIndex: Int
    destIndex: Int
  }

  input ReparentLayerInput{
    origLayerGroupId: ID! 
    destLayerGroupId: ID! 
    origIndex: Int
    destIndex: Int
  }

  input SavedSymbolInput{
    id: ID!
    symbol: String
  }

  type Mutation {
    editMap(input: MapInput): Map
    addLayerGroup(mapId: ID!): LayerGroup
    editLayerGroup(input: LayerGroupInput): LayerGroup
    moveLayergroup( id: ID!, index: Int ): LayerGroup
    deleteLayerGroup( id: ID! ): LayerGroup
    addLayer(input: DatasetInput!): Layer
    deleteLayer(id: ID!): Layer
    updateLayer(input: LayerInput!): Layer
    upload(type: String, files: [Upload]): Dataset
    reorderLayer(input: ReorderLayerInput!): Layer
    reparentLayer(input: ReparentLayerInput!): Layer
    uploadIcon(files: [Upload]): CustomIcon 
    updateSymbol(id: ID!, xml: String): Symbol 
    addTosavedSymbol(input: SavedSymbolInput): SavedSymbol 
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export {typeDefs};
