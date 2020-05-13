module Api
  module V1
    class NearbycomboController < ApplicationController
      include Api::V1::NearbycomboHelper

      def index
        render json: {
          data: get_service_and_reviews
        }
      end
    end
  end
end

