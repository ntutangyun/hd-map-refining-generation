For each junction,

learn the topology represented by in-out sequences in counter-clockwise order.

### Generate topo-graph for routing module:

1. create a folder for the new map under `modules/map/data/` folder. e.g. `modules/map/data/test`
2. place the generated `.bin` file under the `modules/map/data/test` and rename to `base_map.bin`
3. enter apollo container and run `bash ./scripts/generate_routing_topo_graph.sh --map-dir=modules/map/data/test`