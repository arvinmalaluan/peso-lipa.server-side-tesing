const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  get_one: (req, res) => {
    const query_variables = {
      table_name: "tbl_interviews",
      id: req.params.id,
    };

    services.get_id(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },

  get_all: (req, res) => {
    const query_variables = {
      table_name: "tbl_interviews",
      id: req.params.fk,
      fields: "*",
    };

    services.get_fk(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },

  create: (req, res) => {
    try {
      const format_values = {
        interview_date: req.body.interview_date,
        interview_start_time: req.body.interview_start_time,
        interview_end_time: req.body.interview_end_time,
        venue: req.body.venue,
        reminders: req.body.reminders,
        fkid_company: req.body.fkid_company,
        fkid_applicant: req.body.fkid_applicant,
      };

      // prettier-ignore
      const fields = "interview_date, interview_start_time, interview_end_time, venue, reminders, fkid_company, fkid_applicant";

      const query_variables = {
        fields: fields,
        table_name: "tbl_interviews",
        values: textFormatter
          .parseValues(Object.values(format_values))
          .join(", "),
      };

      services.post_(query_variables, (error, results) => {
        errorHandling.check_results(res, error, results);

        if (results.length !== 0) {
          return res.status(201).json({
            success: 1,
            message: "Created Successfully",
            results: results,
          });
        }
      });
    } catch (e) {
      return res.status(500).json({
        error: e,
      });
    }
  },

  update: (req, res) => {
    const query_variables = {
      values: textFormatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_interviews",
      id: req.params.id,
    };

    services.patch_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },

  delete: (req, res) => {
    const query_variables = {
      table_name: "tbl_interviews",
      id: req.params.id,
    };

    services.delete_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },
};
