require "rest-client"

module Api
  module V1
    module NearbycomboHelper
      def get_service_and_reviews
        resource = "https://api.sidebox.com/plugin/nearbyserviceareareviewcombo"
        html = RestClient.get resource, {
          params: {
            storefronttoken: "#{ENV["STORE_FRONT_TOKEN"]}",
            state: "AZ",
            city: "Phoenix",
            checkincount: 20,
            reviewcount: 20
          }
        }
        html
      end
    end
  end
end
