d3.csv("Final_Database_plant.csv").then(function (data) {
    
    var plant_details = data;
  
    var button = d3.select("#button");
  
    var form = d3.select("#form");
  
    button.on("click", runEnter);
    form.on("submit", runEnter);
  
    function runEnter() {
      d3.select("tbody").html("")
      d3.selectAll("p").classed('noresults', true).html("")
      d3.event.preventDefault();
      var inputElement = d3.select("#user-input");
      var inputValue = inputElement.property("value").toLowerCase().trim();
  
      // console.log(inputValue.length);
      // console.log(movies);
      if (inputValue.length < 2){
        d3.select("p").classed('noresults2', true).html("<center><strong>Please try using more than 5 characters to avoid too many results!</strong>")
        inputValue = "Something to give no results"
      }
      console.log(plant_details)
      var filteredData = plant_details.filter(plant_details => plant_details.common_name.toLowerCase().trim().includes(inputValue));
      // console.log(filteredData.length)
      if (filteredData.length === 0 && inputValue !== "Something to give no results"){
        d3.select("p").classed('noresults', true).html("<center><strong>No results. Please check your spelling!</strong>")
      }
      
    //   output = _.sortBy(filteredData, 'avg_vote').reverse()
         output = filteredData
      for (var i = 0; i < filteredData.length; i++) {
        // console.log(output[i]['original_title'])
        // console.log(output[i]['avg_vote'])
        // d3.select("tbody>tr>td").text(output[i]['original_title']);
        let loc = output[i]['images']
        console.log(loc)
        
        // d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+"<td>"+"<a href=https://www.imdb.com/title/"+output[i]['imdb_title_id']+" target='_blank'>"+(output[i]['original_title'])+"</a>"
        // + "</td>" +"<td>" +(output[i]['bloom_time'])+"</td>" +"<td>" +(output[i]['suitable_site_conditions'])+"</td>"  +"<td>" +(output[i]['soil_type'])+"</td>"+"<td>" +(output[i]['climate_appropriate_plants'])+"</td>"+"<td>" +"<img src=images/"+loc+" style='width:100px;height:100px;' alt='Girl in a jacket' >"+"</td>") }


        // <!-- latin_name,common_name,family_name,former_latin_name,plant_type,bloom_time,flower_color,size_at_maturity,climate_appropriate_plants,plant_communities,suitable_site_conditions,soil_type,pruning_needs,water_needs (ml/day),habitat_value,associated_wildlife,stormwater_benefit,stormwater_int,appropriate_location,suggested_green_connection_routes,street_tree_list,additional_characteristices_notes,nurseries,images,photocredit,additional_species_cultivars_varieties,special_list,habitat,habitat_int,thrifty150,thrifty150_int,sidewalk_landscaping_plants,sidewalk_landscaping_plants_int,super60,super60_int,top20,top20_int,shady_clay,shady_clay_int,sandy_soil,sandy_soil_int -->

        d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+
        "<td><i>"+ (output[i]['latin_name']) +"</i></td>" +
        "<td>"+ (output[i]['common_name']) +"</td>" +
        // "<td>" +(output[i]['bloom_time'])+"</td>" +
        "<td>" +(output[i]['suitable_site_conditions'])+"</td>"  +
        "<td>" +(output[i]['soil_type'])+"</td>"+
        "<td>" +(output[i]['climate_appropriate_plants'])+"</td>"+
        "<td>" +(output[i]['water_needs (ml/day)'])+"</td>"+
        "<td>" +"<img src=images/"+loc+" style='width:100px;height:100px;' alt='No Image' >"+"</td>") }
    };
    window.resizeTo(screen.width,screen.height)
  
  
  });

